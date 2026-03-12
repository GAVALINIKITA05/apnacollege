import { useRef } from "react";

export default function Signup() {

  const nameRef = useRef();
  const emailRef = useRef();
  const mobilenoRef = useRef();
  const cityRef = useRef();

  const saveuser = (e) => {
    e.preventDefault();

   
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobilenoRef.current.value;
    const city = cityRef.current.value;

 
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("City:", city);

    alert("Form Submitted Successfully!");
  };

 

  return (
    <>
    
      <form align="center" onSubmit={saveuser}>
        <h1>WELCOME</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input type="text" name="name" ref={nameRef} />
              </td>
            </tr>

            <tr>
              <th>Email</th>
              <td>
                <input type="text" name="email" ref={emailRef} />
              </td>
            </tr>

            <tr>
              <th>Mobile No</th>
              <td>
                <input type="text" name="mobile" ref={mobilenoRef} />
              </td>
            </tr>

            <tr>
              <th>City</th>
              <td>
                <select name="city" ref={cityRef}>
                  <option>Satara</option>
                  <option>Mumbai</option>
                  <option>Solapur</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <input type="reset" value="Reset" />
              </td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
