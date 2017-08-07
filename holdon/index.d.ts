declare namespace HoldOn {


    interface options {
        theme:string;
        message:string;
        backgroundColor?;
        textColor?;
    }

    /**
     * Open a HoldOn layout
     * @param {options} options
     */
    function open(options:options) ;

    /**
     * Close the HoldOn layout
     */
    function close() ;

}