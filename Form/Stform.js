document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('Student Name').value;
    console.log(username);
    const Date_of_Birth = document.getElementById('Date of Birth').value;
    console.log(Date_of_Birth);
    const Gender = document.getElementById('Gender').value;
    console.log(Gender);
    const Email = document.getElementById('Email').value;
    console.log(Email);
    const Phone_No = document.getElementById('Phone_No').value;
    console.log(Phone_No);
    const Address = document.getElementById('Address').value;
    console.log(Address);
    const Collage_Name = document.getElementById('Collage_Name').value;
    console.log(Collage_Name);
    const Student_Marks_Card_No = document.getElementById('Student_Marks_Card_No').value;
    console.log(Student_Marks_Card_No);


    const data = {
        'username': username ,
        'dob': Date_of_Birth ,
        'gender': Gender ,
        'email': Email ,
        'phone_no': Phone_No ,
        'address': Address ,
        'collage_name': Collage_Name ,
        'student_marks_card_no': Student_Marks_Card_No ,
    }
    console.log(data.username);
    console.log(data.dob);
    console.log(data.gender);
    console.log(data.email);
    console.log(data.phone_no);
    console.log(data.address);
    console.log(data.collage_name);
    console.log(data.student_marks_card_no);
    
    window.location.href="Form_Details";
})

