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
    const Current_Collage_Name = document.getElementById('Current_Collage_Name').value;
    console.log(Current_Collage_Name);
    const Current_Collage_Address = document.getElementById('Current_Collage_Address').value;
    console.log(Current_Collage_Address);
    const Marks_Card_No = document.getElementById('Marks_Card_No').value;
    console.log(Marks_Card_No);


    const data = {
        'username': username ,
        'dob': Date_of_Birth ,
        'gender': Gender ,
        'email': Email ,
        'phone_no': Phone_No ,
        'address': Address ,
        'current_collage_name': Current_Collage_Name ,
        'current_collage_address': Current_Collage_Name ,
        'marks_card_no': Marks_Card_No ,
    }
    console.log(data.username);
    console.log(data.dob);
    console.log(data.gender);
    console.log(data.email);
    console.log(data.phone_no);
    console.log(data.address);
    console.log(data.current_collage_name);
    console.log(data.current_collage_address);
    console.log(data.marks_card_no);
    
    window.location.href="Form_Details";
})

