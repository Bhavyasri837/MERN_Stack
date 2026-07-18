const show = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    let gender = "";
    const genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
            break;
        }
    }

    let qualifications = [];
    const qualify = document.getElementsByClassName("qualification");

    for (let i = 0; i < qualify.length; i++) {
        if (qualify[i].checked) {
            qualifications.push(qualify[i].value);
        }
    }
    const dob = document.getElementsByName("dob")[0].value;
    const time = document.getElementsByName("time")[0].value;
    const color = document.getElementsByName("color")[0].value;
    const range = document.getElementsByName("range")[0].value;
    // const file = document.getElementsByName("file")[0].value;

    // const file = document.getElementsByName("file")[0].files[0];

    const fileInput = document.getElementsByName("file")[0];
    const file = fileInput.files[0];

    document.getElementById("result").innerHTML = `
        <h2>Details</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Qualifications:</b> ${qualifications.join(", ")}</p>
        <p><b>DOB:</b> ${dob}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Color:</b> ${color}</p>
        <p><b>Range:</b> ${range}</p>
        <p><b>File:</b> ${file}</p>
    `;
    if (file) {
    const image = document.getElementById("preview");
    image.src = URL.createObjectURL(file);
}
};