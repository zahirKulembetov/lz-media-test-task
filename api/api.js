
async function auth(user) {
   let res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   });

   if (!res.ok) {
      return new Error('Error - login api dosnt exist');
   }

   return await res.json();
}


async function registration(user) {
   let res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
   });

   if (!res.ok) {
      return new Error('Error - register api dosnt exist');
   }

   return await res.json();
}

export { auth, registration };