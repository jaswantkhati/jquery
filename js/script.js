// $(document).ready(function() {
//     if ($(".perent").is(":checked")) {
//         $(".child1").checked(true);
//     }
// })
$(document).ready(
    function() {
        $(".parentCheckBox").click(
            function() {
                $(this).parents('fieldset').find('.childCheckBox').attr('checked', this.checked);
            }
        );
        $('.childCheckBox').click(
            function() {
                if ($(this).parents('fieldset').find('.parentCheckBox').attr('checked') == true && this.checked == false)
                    $(this).parents('fieldset').find('.parentCheckBox').attr('checked', false);
                if (this.checked == true) {
                    var flag = true;
                    $(this).parents('fieldset').find('.childCheckBox').each(
                        function() {
                            if (this.checked == false)
                                flag = false;
                        }
                    );
                    $(this).parents('fieldset').find('.parentCheckBox').attr('checked', flag);
                }
            }
        );
    }
);