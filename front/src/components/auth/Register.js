

function Register(){

    return (
        <section className="max-w-md m-auto">
          <h2 className="text-center">Register</h2>
         <div className="p-4">
         <form className="bg-green-100 flex flex-col pt-4 pb-4">
            <input
            className="m-auto p-1 rounded-md outline-0"
            placeholder="Email"
            />
             <input
             className="m-auto mt-2 p-1 rounded-md outline-0"
            placeholder="Password"
            />
            <button className="bg-gray-100 m-auto mt-2 p-2 rounded-md">Submit</button>
          </form>

         </div>
        </section>
    )
}

export default Register;
