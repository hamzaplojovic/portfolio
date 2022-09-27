import { Text, Paper, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ItemInfo } from "./ItemInfo";
import { ProjectLanguages } from "./ItemSkills";
import { ItemInterface } from "./ItemType";
import { useStyles } from "./ProjectsItemStyles";

interface UserInfoActionProps {
    item: ItemInterface;
}

export const ProjectsItem = (props: UserInfoActionProps) => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const handleClick = (username: string) => {
        navigate(`/${username}`, { state: { item: props.item } });
    };
    return (
        <Paper withBorder className={classes.item}>
            <Text className={classes.name}>{props.item.name}</Text>
            <ProjectLanguages languages={props.item.languages} />
            <ItemInfo
                license={props.item.license}
                contributors={props.item.contributors}
                origin={props.item.origin}
            />
            <Text align="center" color="dimmed">
                {props.item.description}
            </Text>
            <Button
                className={classes.button}
                onClick={() => {
                    handleClick(props.item.name);
                }}
            >
                View More
            </Button>
        </Paper>
    );
};
