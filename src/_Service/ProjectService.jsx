import ListeProjets from "@/Assets/Data/projets.json";

const GetAllProjet = () => {
    return ListeProjets;
}

const GetOneProjet = async (id) => {
    const OneProjet = await ListeProjets.find(projet => projet.id === id)

    return OneProjet
}

const ProjetService = {
    GetAllProjet,
    GetOneProjet
}

export default ProjetService;
