// import { useState } from "react";

// export default function RegisterForm(){

//     const[name,setname]=useState();
//     const[gmail,setgmail]=useState();
//     const[mobileno,setmobileno]=useState();
//     const[city,setcity]=useState();

//     const updatename=(e)=>
//     {
//         setname(e.target.value)
//     }

//     const updategmail=(e)=>
//     {
//         setgmail(e.target.value)
//     }
//      const updatemobileno=(e)=>
//     {
//         setmobileno(e.target.value)
//     }
//      const updatecity=(e)=>
//     {
//         setcity(e.target.value)
//     }


//     const saveuser=(event)=>{
//         event.preventDefault();
//         console.log("saved");
//     }

//     console.log(name,"\t", gmail,"\t",mobileno ,"\t", city);
//     let user={name,gmail,mobileno,city};
//     console.log(user)

//     letuser1={
//         "username":name,
//         "gmail":gmail,
//         "mobileno":mobileno,
//         "city":city
//     }
//     console.log(user1)



//     return<>
//     <form onSubmit={saveuser}>
//         <table align="center" >
//             <tr>
//             <td>name</td>
//             <td><input type="text" onChange={updatename}></input></td></tr>
//              <tr>
//                  <td>gmail</td>
//             <td><input type="text" onChange={updategmail}></input></td></tr>
//              <tr>
//              <td>mobile number</td>
//             <td><input type="text" onChange={updatemobileno}></input></td></tr>
//             <tr>
//             <td>city</td>
//             <select onChange={updatecity}>
//                 <option>pune</option>
//                 <option>satara</option>
//                 <option>solapur</option>
//             </select></tr>
//             <td><input type="reset"></input></td>
//             <td><input type="submit"></input></td>
//         </table>
//     </form>
//     </>
    
// }