// Search input
const github = new Github();
const ui = new UI();
const serachUser = document.getElementById('searchUser');

serachUser.addEventListener('keyup', e => {
    const userText = e.target.value;

    if (userText !== '' ) {
        github.getUser(userText)
         .then(data => {

            if(data.profile.message === 'Not Found') {
                //show alert

                ui.showAlert('User not found', 'alert alert-danger');


            } else {
                //show profile

                ui.showProfile(data.profile);
            }
            
         })

    }else {
        //clear profile 
        ui.clearProfile();

    }
})