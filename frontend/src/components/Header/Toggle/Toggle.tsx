import {
    Switch,
    Group,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function SwitchToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <Group>
            <Switch
                checked={colorScheme === "dark"}
                onChange={() => toggleColorScheme()}
                size="md"
                onLabel={<IconSun color={theme.white} size={18} stroke={1.5} />}
                offLabel={
                    <IconMoonStars
                        color={theme.colors.gray[6]}
                        size={18}
                        stroke={1.5}
                    />
                }
            />
        </Group>
    );
}
