import { Stack, Button } from "@mantine/core";
import { useStyles } from "./DropDownComponents/DropDownStyles";
import { data } from "./DropDownComponents/DropDownData";

export const DropDown = () => {
    const { classes } = useStyles();
    return (
        <Stack className={classes.wrapper}>
            {data.map((item) => {
                return (
                    <Button
                        variant="outline"
                        style={{ height: "10%" }}
                        component="a"
                        href={item.link}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Stack>
    );
};
