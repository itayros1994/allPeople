import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function UserPreview({ user, detailsMode }) {
  return (
    <div className="link">
      <div className="user-preview-container link">
        <img className="user-avatar" src={user.picture.thumbnail} alt="" />
        <div className="user-names-container">
          <div className="user-name-first">
            {user.name.first.substring(0, 1)}
            {user.name.last.substring(0, 1)}
          </div>
          <div className="user-name-last">Age : {user.registered.age}</div>
          <div className="user-name-last">{user.gender}</div>
          {
            <p>
              <a className="email" href={`mailto:${user.email}`}>
                Send Me Email 📨
              </a>
            </p>
          }
          <Link
            to={{
              pathname: `/details/${user.name.first}`,
              state: {
                choosenUser: user
              },
            }}
          >
            <Button
              className={detailsMode ? "none" : "link"}
              variant="contained"
            >
              Click For More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export function UserPreview() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }