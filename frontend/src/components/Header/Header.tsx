import { useState } from "react";
import { Header, Container, Group, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SwitchToggle } from "./Toggle/Toggle";
import { data } from "./HeaderComponents/HeaderData";
import { useStyles } from "./HeaderComponents/HeaderStyles";
import { useLocation } from "react-router-dom";
import { DropDown } from "./DropDown/DropDown";

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

function HeaderComponent({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(useLocation().pathname);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
            })}
            onClick={() => {
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <>
            <Header height={60}>
                <Container className={classes.header}>
                    <Button
                        variant="subtle"
                        style={{ fontSize: 20 }}
                        component="a"
                        href="/"
                    >
                        Hamza Plojovic
                    </Button>
                    <Group spacing={50} className={classes.links}>
                        {items}
                        <SwitchToggle />
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                    />
                </Container>
            </Header>
            {opened === true && <DropDown />}
        </>
    );
}

export const AppHeader = () => {
    return <HeaderComponent links={data} />;
};
