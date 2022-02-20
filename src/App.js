import './App.css';
import {AppBar, Toolbar, Typography } from '@mui/material'
import ListPage from './components/list-page'

function App() {
  return (
    <div className="App">
      <AppBar postion = 'static' sx= {{backgroundColor: 'light-blue'}}>
        <Toolbar>
          <Typography            
          variant='h6'
            >
            To-Do-List
          </Typography>
        </Toolbar>

      </AppBar>
      <ListPage/>
    </div>
  );
}

export default App;
