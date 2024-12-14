import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slag: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;
