import Cosechadora from "./Cosechadora"
import Pulverizadora from "./Pulverizadora"

export default function Cards({ data }) {
    if (data.type == "Pulverizadora" || data.class == "Pulverizadora") {
        return <Pulverizadora data={data} />
    } else {
        return <Cosechadora data={data} />
    }
}