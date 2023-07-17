import { ThemeProvider } from './ThemeProvider';
import { Welcome } from './Welcome/Welcome';
import { Maps } from './Components/Maps/Maps'
import { Grenades } from './Components/Grenades/Grenades'
import { NavbarSimple } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Flex } from '@mantine/core';

export default function App() {
  return (
    <ThemeProvider>
      <Flex gap="xs">
        <NavbarSimple />
        <Routes>
          <Route path='/' element={<Maps />} />
          <Route path='/grenades' element={<Grenades />} />
        </Routes>
      </Flex>
    </ThemeProvider>
  );
}
