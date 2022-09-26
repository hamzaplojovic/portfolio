import { RingProgress, Text, Space, Paper } from "@mantine/core";
import { useStyles } from "./ProjectsItemStyles";

interface SkillsInterface {
    languages: any;
}

export const ProjectLanguages = (props: SkillsInterface) => {
    const { classes } = useStyles();
    return (
        <Paper className={classes.skillswrapper}>
            <div className={classes.skills}>
                {props.languages.length > 0 &&
                    props.languages.map((item: any) => {
                        return (
                            <RingProgress
                                key={item.language}
                                size={90}
                                thickness={5}
                                roundCaps
                                sections={[
                                    { value: item.percentage, color: "blue" },
                                ]}
                                label={
                                    <Text
                                        color="blue"
                                        weight={500}
                                        align="center"
                                        size={10}
                                    >
                                        {item.language
                                            ? item.language
                                            : "Undefined"}
                                        <Space />
                                        <Text
                                            color="blue"
                                            weight={800}
                                            align="center"
                                            size={10}
                                        >
                                            {item.percentage}%
                                        </Text>
                                    </Text>
                                }
                            />
                        );
                    })}
            </div>
        </Paper>
    );
};
