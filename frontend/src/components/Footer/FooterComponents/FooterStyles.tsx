import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    footer: {
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        width: "100%",
    },

    inner: {
        width: "100%",
        background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        display: "flex",
        justifyContent: "space-evenly",
        padding: "0.5% 0%",
    },
}));
