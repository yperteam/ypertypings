interface swalOption {
    title:string;
    text:string;
    showCancelButton?: boolean;
    confirmButtonColor?: string;
    confirmButtonText?: string;
    closeOnConfirm?: boolean
}


/**
 *
 * @param {swalOption} options
 */
declare function swal(
    options: swalOption
) ;

/**
 *
 * @param {string} title
 * @param {string} text
 * @param {string} type
 */
declare function swal(
    title: string,
    text:string,
    type?:string
)