import {useState,useEffect} from 'react';
import { Background } from "./components/background";
import {DescriptionMovie} from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";
import { apiData } from "./api/data";

import axios from 'axios';

const DEFAULT_MOVIE = {
    
        title: "CINDERELLA",
        description: "Cinderela é uma jovem que vive com sua madrasta malvada e suas duas meias-irmãs. Ela é tratada como uma criada em sua própria casa, sendo obrigada a realizar todas as tarefas domésticas. Apesar disso, Cinderela mantém uma personalidade gentil e otimista.",
        imageSmall:  "",
        imageBanner: "https://i.pinimg.com/originals/a0/3c/5b/a03c5bc33943797813b4d0a80d6bc3bb.jpg",
        linkVideo: "RgYeiTwRj4k&t=14s",
        category: "movies",   
}

function App() {
    const [video,setVideo] = useState(DEFAULT_MOVIE);
    const [moviesData, setMoviesData] = useState([]);
    const [playVideo, setPlayVideo] = useState(false);

    const {title, description, linkvideo, imageBanner} = video;
    
    const apiDataMovies = moviesData.movies?.length > 0 ? moviesData: apiData;

   useEffect(() =>{
    const getMoviesAndCategories = async () =>{
        const {data} = await axios.get('http://localhost:3003/movies-categories')
        console.log(data);
        setMoviesData(data);
    };
    getMoviesAndCategories()
   },[])
   
    const handleOpenPlayVideo = () => setPlayVideo(true);
    const handleClosePlayVideo = () => setPlayVideo(false);

    const handleVideo = (data) =>{
        setVideo(data);
        window.scrollTo({ top:0 });
    }

    return(
        <Background imageBanner={imageBanner}>
        
        <Header></Header>
       
        <DescriptionMovie 
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo}>
        </DescriptionMovie>    
        
        <Movies data={apiDataMovies} handleVideo={(data) => handleVideo(data)}>   
        </Movies>
        
        <Video 
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkvideo={linkvideo}
        />
        </Background>
    );
}

export default App;

