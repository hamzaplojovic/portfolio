import {
    createStyles,
    Container,
    Text,
    Button,
    Group,
    keyframes,
} from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

const BREAKPOINT = "@media (max-width: 755px)";

export const bounce = keyframes({
    "0%": { scale: "1" },
    "50%": { scale: "1.01" },
    "100%": { scale: "1" },
});

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        boxSizing: "border-box",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        height: "91.5vh",
    },

    inner: {
        position: "relative",
        paddingBottom: 120,
        paddingTop: "21vh",
        [BREAKPOINT]: {
            paddingBottom: 80,
            paddingTop: 80,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 62,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        animation: `${bounce} 2s ease-in-out infinite`,

        [BREAKPOINT]: {
            fontSize: 42,
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xl,
        fontSize: 24,

        [BREAKPOINT]: {
            fontSize: 18,
        },
    },

    controls: {
        marginTop: theme.spacing.xl * 2,

        [BREAKPOINT]: {
            marginTop: theme.spacing.xl,
        },
    },

    control: {
        height: 54,
        paddingLeft: 38,
        paddingRight: 38,

        [BREAKPOINT]: {
            height: 54,
            paddingLeft: 18,
            paddingRight: 18,
            flex: 1,
        },
    },
}));

export const Home = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    A{" "}
                    <Text
                        component="span"
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan" }}
                        inherit
                    >
                        full stack
                    </Text>{" "}
                    Software Developer
                </h1>

                <Text className={classes.description} color="dimmed">
                    Software developer with ability to work with both front and
                    back side of the amazing piece of art that is called
                    software.
                </Text>

                <Group className={classes.controls}>
                    <Button
                        component="a"
                        target="_blank"
                        href="https://linkedin.com/in/hamzaplojovic"
                        size="xl"
                        className={classes.control}
                        leftIcon={<IconBrandLinkedin size={25} stroke={1.5} />}
                    >
                        LinkedIn
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/hamzaplojovic"
                        size="xl"
                        target="_blank"
                        variant="default"
                        className={classes.control}
                        leftIcon={<IconBrandGithub size={25} stroke={1.5} />}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
};
