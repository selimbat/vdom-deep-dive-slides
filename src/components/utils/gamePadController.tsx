export async function gamepadButtonPress(listeners: {
    [button: number]: () => void;
}): Promise<void> {
    const lastStates: boolean[][] = [];

    while (true) {
        const gamepads = [
            ...navigator.getGamepads()
        ].filter(
            (g: Gamepad | null): g is Gamepad => g !== null
        );

        if (gamepads.length === 0) {
            await new Promise((resolve) => {
                addEventListener('gamepadconnected', () => resolve(null), { once: true });
            });
            continue;
        }

        await new Promise((r) => requestAnimationFrame(r));

        for (const gamepad of gamepads) {
            const state = gamepad.buttons.map((button) => button.pressed);
            const lastState = lastStates[gamepad.index] || state.map(() => false);

            for (const [buttonIndex, callback] of Object.entries(listeners)) {
                const wasPressed = lastState[parseInt(buttonIndex)];
                const pressed = state[parseInt(buttonIndex)];
                if (pressed && !wasPressed) callback();
            }

            lastStates[gamepad.index] = state;
        }
    }
}