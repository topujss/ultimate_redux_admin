import swal from 'sweetalert';

// alert with message
export const alertMsg = (msg) => {
  swal(msg);
};

// alert with color
export const alertClr = (msg, type = 'success') => {
  swal(msg.title, msg.msg, type);
};

// alert with validation
export const alertConfirm = (msg, type = 'success') => {
  swal({
    title: msg.title,
    text: msg.msg,
    icon: type,
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    willDelete
      ? swal('Poof! Your imaginary file has been deleted!', {icon: 'success'})
      : swal('Your imaginary file is safe!');
  });
};
