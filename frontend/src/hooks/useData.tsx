import axios from "axios";
import { useEffect, useState } from "react";

interface useDataInterface {
    url: string;
}

export const useData = (props: useDataInterface) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`https://dxgblc.deta.dev/${props.url}`).then((r) => {
            setData(r.data);
        });
    }, [props.url]);
    return { data };
};
