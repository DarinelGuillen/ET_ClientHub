// import React from 'react';
// import '../../assets/style/FormUser.css';

// function FormUser({ params }: { params: any }) {
//   const renderDefaultValues = () => {
//     if (!params) {
//       return {};
//     }

//     const { name, last_name, age, gender, address, preferences } = params;

//     return {
//       firstName: name || '',
//       lastName: last_name || '',
//       age: age || '',
//       gender: gender || 'male',
//       street: address?.street || '',
//       exteriorNumber: address?.exterior_number || '',
//       interiorNumber: address?.interior_number || '',
//       neighborhood: address?.neighborhood || '',
//       municipality: address?.municipality || '',
//       state: address?.state || '',
//       hobby: preferences?.hobby || '',
//       destinations: preferences?.destinations || '',
//       roomtype: preferences?.roomtype || '',
//       income: preferences?.income || '',
//       trips: preferences?.trips || '',
//       books: preferences?.books || '',
//     };
//   };

//   const defaultValues = renderDefaultValues();

//   return (
//     <>
//       <form>
//         <div className="Container_FormGroup">
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" className="form-control" id="firstName" defaultValue={defaultValues.firstName} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" className="form-control" id="lastName" defaultValue={defaultValues.lastName} />
//           </div>
//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <label htmlFor="age">Age</label>
//               <input type="text" className="form-control" id="age" defaultValue={defaultValues.age} />
//             </div>
//             <div className="form-group col-md-6">
//               <label htmlFor="gender">Gender</label>
//               <select className="form-control" id="gender" defaultValue={defaultValues.gender}>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {params && (
//           <>
//             <div className="Container_FormGroup">
//               <div className="form-group">
//                 <label htmlFor="street">Street</label>
//                 <input type="text" className="form-control" id="street" defaultValue={defaultValues.street} />
//               </div>
//               <div className="form-row">
//                 <div className="form-group col-md-4">
//                   <label htmlFor="exteriorNumber">Exterior Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exteriorNumber"
//                     defaultValue={defaultValues.exteriorNumber}
//                   />
//                 </div>
//                 <div className="form-group col-md-4">
//                   <label htmlFor="interiorNumber">Interior Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="interiorNumber"
//                     defaultValue={defaultValues.interiorNumber}
//                   />
//                 </div>
//                 <div className="form-group col-md-4">
//                   <label htmlFor="neighborhood">Neighborhood</label>
//                   <input type="text" className="form-control" id="neighborhood" defaultValue={defaultValues.neighborhood} />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group col-md-6">
//                   <label htmlFor="municipality">Municipality</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="municipality"
//                     defaultValue={defaultValues.municipality}
//                   />
//                 </div>
//                 <div className="form-group col-md-6">
//                   <label htmlFor="state">State</label>
//                   <input type="text" className="form-control" id="state" defaultValue={defaultValues.state} />
//                 </div>
//               </div>
//             </div>

//             <div className="Container_FormGroup">
//                {/* Preferenvcies  */}
//                <div className="form-group">
//   <label htmlFor="hobby">Hobbies</label>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="hobbyMusic"
//       value="Música"
//       checked={defaultValues.hobby.includes('Música')}
//     />
//     <label className="form-check-label" htmlFor="hobbyMusic">
//       Música
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="hobbyMovies"
//       value="Cine"
//       checked={defaultValues.hobby.includes('Cine')}
//     />
//     <label className="form-check-label" htmlFor="hobbyMovies">
//       Cine
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="hobbyModeling"
//       value="Modelado"
//       checked={defaultValues.hobby.includes('Modelado')}
//     />
//     <label className="form-check-label" htmlFor="hobbyModeling">
//       Modelado
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="hobbyShopping"
//       value="Compras"
//       checked={defaultValues.hobby.includes('Compras')}
//     />
//     <label className="form-check-label" htmlFor="hobbyShopping">
//       Compras
//     </label>
//   </div>
// </div>

// <div className="form-group">
//   <label htmlFor="destinations">Destinations</label>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="destinationDesert"
//       value="Desierto"
//       checked={defaultValues.destinations.includes('Desierto')}
//     />
//     <label className="form-check-label" htmlFor="destinationDesert">
//       Desierto
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="destinationBeach"
//       value="Playa"
//       checked={defaultValues.destinations.includes('Playa')}
//     />
//     <label className="form-check-label" htmlFor="destinationBeach">
//       Playa
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="destinationCity"
//       value="Ciudad"
//       checked={defaultValues.destinations.includes('Ciudad')}
//     />
//     <label className="form-check-label" htmlFor="destinationCity">
//       Ciudad
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="destinationMountain"
//       value="Montaña"
//       checked={defaultValues.destinations.includes('Montaña')}
//     />
//     <label className="form-check-label" htmlFor="destinationMountain">
//       Montaña
//     </label>
//   </div>
// </div>

// <div className="form-group">
//   <label htmlFor="roomtype">Room Type</label>
//   <select className="form-control" id="roomtype" value={defaultValues.roomtype}>
//     <option value="Casa propia">Casa propia</option>
//     <option value="Departamento">Departamento</option>
//     <option value="Renta">Renta</option>
//   </select>
// </div>

// <div className="form-group">
//   <label htmlFor="income">Income</label>
//   <select className="form-control" id="income" value={defaultValues.income}>
//     <option value="2,500 — 5,000">2,500 — 5,000</option>
//     <option value="5,001 — 7,000">5,001 — 7,000</option>
//     <option value="7,001 — 10,000">7,001 — 10,000</option>
//   </select>
// </div>

// <div className="form-group">
//   <label htmlFor="trips">Trips</label>
//   <select className="form-control" id="trips" value={defaultValues.trips}>
//     <option value="1—3">1—3</option>
//     <option value="4—6">4—6</option>
//     <option value="7-10">7-10</option>
//   </select>
// </div>

// <div className="form-group">
//   <label htmlFor="books">Books</label>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="bookRomance"
//       value="Romance"
//       checked={defaultValues.books.includes('Romance')}
//     />
//     <label className="form-check-label" htmlFor="bookRomance">
//       Romance
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="bookNovel"
//       value="Novela"
//       checked={defaultValues.books.includes('Novela')}
//     />
//     <label className="form-check-label" htmlFor="bookNovel">
//       Novela
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="bookFantasy"
//       value="Fantasia"
//       checked={defaultValues.books.includes('Fantasia')}
//     />
//     <label className="form-check-label" htmlFor="bookFantasy">
//       Fantasia
//     </label>
//   </div>
//   <div className="form-check form-check-inline">
//     <input
//       className="form-check-input"
//       type="checkbox"
//       id="bookPolitics"
//       value="Politica"
//       checked={defaultValues.books.includes('Politica')}
//     />
//     <label className="form-check-label" htmlFor="bookPolitics">
//       Politica
//     </label>
//   </div>
// </div>
//                {/* end preferencies */}
//             </div>
//           </>
//         )}
//       </form>
//     </>
//   );
// }

// export default FormUser;
