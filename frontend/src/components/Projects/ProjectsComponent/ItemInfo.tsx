import { Anchor, Avatar, Text } from "@mantine/core";
import { IconScale } from "@tabler/icons";
import { useStyles } from "./ProjectsItemStyles";

interface Props {
    license: any;
    contributors: any;
    origin: string;
}

export const ItemInfo = (props: Props) => {
    const { classes } = useStyles();
    return (
        <div>
            <div className={classes.info}>
                <Anchor href={props.license.url} target="_blank">
                    <IconScale size={80} color="gray" stroke={1.5} />
                </Anchor>
                <div className={classes.infochild}>
                    {props.contributors.map((item: any) => {
                        return (
                            <Avatar
                                key={item.url}
                                size={"lg"}
                                component={"a"}
                                radius="xl"
                                target="_blank"
                                href={item.url}
                                src={item.avatar_url}
                            ></Avatar>
                        );
                    })}
                    <Text size="xs">{props.origin.slice(0, 10)}</Text>
                </div>
            </div>
        </div>
    );
};
