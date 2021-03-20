import {  useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  return (
    <div
      style={
        {
          display: 'flex',
          flexDirection: 'row'
        }
      }
    >
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content
        setGenres={setGenres}
        selectedGenreId={selectedGenreId}
      />
    </div>
  )
}
