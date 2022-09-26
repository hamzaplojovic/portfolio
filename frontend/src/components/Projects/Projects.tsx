import { useData } from "../../hooks/useData";
import { ProjectsItem } from "./ProjectsComponent/ProjectsItem";
import { ItemInterface } from "./ProjectsComponent/ItemType";

export const Projects = () => {
    const { data } = useData({ url: "projects" });
    return (
        <div style={{ height: "90vh" }}>
            {data.map((item: ItemInterface) => {
                return <ProjectsItem key={item.key} item={item} />;
            })}
        </div>
    );
};
