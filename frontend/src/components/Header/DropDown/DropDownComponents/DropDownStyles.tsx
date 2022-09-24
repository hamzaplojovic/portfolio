import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: 20,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        height: "85vh",
        padding: "0% 10%",
        position: "absolute",
        zIndex: 999,
        width: "100%",
        justifyContent: "space-evenly",
    },
}));
