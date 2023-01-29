function Contact() {
    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-3xl mt-10">تماس با من و سفارش پروژه</h1>
                <form onSubmit={e => e.target.value} className="flex justify-start items-start mt-6 flex-col">
                    <label>نام: <span className="text-red-400">*</span></label>
                    <input type="text" 
                           placeholder="نام"
                           onChange={e=>e.target.value}
                           className="text-veryDarkBlue w-[250px] py-1 px-3 rounded-md focus:outline-none my-4 md:w-[400px]"
                    />
                    <label>ایمیل: <span className="text-red-400">*</span></label>
                    <input type="email" 
                           placeholder="ایمیل"
                           onChange={e=>e.target.value}
                           className="text-veryDarkBlue w-[250px] py-1 px-3 rounded-md focus:outline-none  md:w-[400px] my-4"
                           
                    />
                    <label>سفارش و توضیحات پروژه: <span className="text-red-400">*</span></label>
                    <textarea placeholder="سفارش و توضیحات پروژه" className="text-veryDarkBlue rounded-sm w-[250px] md:w-[400px] py-1 px-3 my-4 min-h-[300px]">
                    
                    </textarea>
                    <a mailto="mesmilzadeh@gmail.com" className="mx-auto bg-blue-600 hover:bg-btnColor p-2 rounded-lg transition-all">فرستادن</a>
                </form>
            </section>
        </>
    );
}

export default Contact;