module.exports = {
    execute: () => {
        console.log("In example...")
        const keytar = require('keytar');
        
        const keytarService = 'test.jvandernoot.com';
        const keytarAcct = 'Keytar Test Key';
        const sampleVal = `Value: ${Math.random()}`;

        console.log(`Writing value to credential manager with keytar - ${sampleVal}`);
        keytar.setPassword(keytarService, keytarAcct, sampleVal);
        
        console.log('Retrieving value from credential manager...');
        keytar.getPassword(keytarService, keytarAcct)
            .then(result => {
                if (result === sampleVal) console.log('Return values match!');
                else console.log('Return values do NOT match!');

                console.log(` Expected: ${sampleVal}`);
                console.log(` Received: ${sampleVal}`);
            });
        
        console.log('Deleting entry from credential manager...');
        keytar.deletePassword(keytarService, keytarAcct);

        console.log('FINISHED!!!');
    },
};