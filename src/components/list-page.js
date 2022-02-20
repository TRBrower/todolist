import {Box, Grid, Card} from '@mui/material'

const listData = [
    {title: '1'},
    {title: '2'},


]
    
     

const ListPage = ()=>{
    return(
        <Box>
            <ul>
            {listData.map((item) => {
             return (
                <li>{item.title}</li>
                
             )
            })
        }            
            </ul> 



        </Box>
    )
}


export default ListPage;