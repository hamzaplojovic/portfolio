import { Container, ActionIcon } from "@mantine/core";
import { data } from "./FooterComponents/FooterData";
import { useStyles } from "./FooterComponents/FooterStyles";

export function Footer() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {data.map((item) => {
                    return (
                        <ActionIcon
                            key={item.link}
                            size="lg"
                            component="a"
                            href={item.link}
                            target="_blank"
                        >
                            <item.icon size={30} stroke={1} />
                        </ActionIcon>
                    );
                })}
            </Container>
        </div>
    );
}
