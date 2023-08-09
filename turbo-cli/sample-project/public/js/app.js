/* Your custom app logic goes here */
(function(){

  console.log('Hello!')
  $('#btn-add-profile').click(function(event){
    event.preventDefault()

    var profile = {}
    $('input').each(function(i, field){
      if (field.type != 'submit'){
        console.log(field.name + '=' + field.value)
        profile[field.name] = field.value
      }
    })

    console.log('Add Profile: ' + JSON.stringify(profile))
    $.ajax({
      url: '/createprofile',
      type: 'POST',
      data: profile,
      success: function(data){
        console.log('PROFILE ADDED: ' + JSON.stringify(data))
      },
      error: function(err){

      }
    })
  })

})()
