var key = '';
$(document).ready(function() {
        TerminalShell.commands['artisan'] = function(terminal) {
                data = '';
                for (var i = 1; i < arguments.length; i++) {
                        data += ' ' + arguments[i];
                } 

                $.ajax({
                        type: "POST",
                        url: base_url+'run',
                        cache: false,
                        beforeSend: function ( xhr ) {
                                terminal.setWorking(true);
                        },
                        data: {
                                cmd: data
                        }
                }).done(function(msg) {
                        terminal.print($(msg));
                        terminal.setWorking(false);
                }).fail(function(jqXHR, textStatus) {
					terminal.print(textStatus);
					terminal.setWorking(false);
				});
        };
        TerminalShell.commands['password'] = function(terminal,pass) {
                $.ajax({
                        type: "POST",
                        url: base_url + 'password',
                        cache: false,
                        beforeSend: function () {
                                terminal.setWorking(true);
                        },
                        data: {
                                password: pass
                        }
                }).done(function(msg) {
                        console.log(msg);
                        terminal.print(msg);
                        terminal.setWorking(false);
                }).fail(function(jqXHR, textStatus) {
					terminal.print(textStatus);
					terminal.setWorking(false);
				});
        };        
});