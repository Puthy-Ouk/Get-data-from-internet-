const url="https://jsonplaceholder.typicode.com/users";
async  function getData  ()  {
    const rep = await fetch(url);
    const data = await (rep.json());
    const list = document.querySelector('table');
    data.forEach(element => {
    const {id,username,email,phone,website,} = element;
    if((id%2 == 0) && id > 5 ){
      list.innerHTML +=`
        <tr>
            <th>${id}</th>
            <th>${username}</th>
            <th>${email}</th>
            <th>${phone}</th>
            <th>${website}</th>
            <th>${element.company.name}</th>
        </tr>
        `;
    };
    });

}
getData();