import { PrismaClient } from "@prisma/client";
import * as readline from 'readline';
import * as faker from 'faker';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function fakeData()
{
  let names: string[] = ['Johannes','Maria','Elizabeth','Themba','Patricia','Willem','Zanele''David','Anna','John','Michael','Sibongile','Johanna','Sipho','Joseph','Bongani','Lindiwe','Jan','Daniel','Martha','Busisiwe','Sibusiso','Thabo','Mpho','Petrus','Patrick','Peter','Simon','Jacobus','Samuel','William','Nonhlanhla','Hendrik','Pieter','Sarah','Thomas','Richard','Nkosinathi','Jabulani','Nokuthula','Tebogo','Thulani','Xolani','Johan','Linda','Andries','Zandile','Robert','George','Joyce','Mandla','Margaret','James','Moses','Siyabonga','Cynthia','Nompumelelo','Thandi','Andrew','Sello','Dumisani','Nomsa','Fikile','Jacob','Paul','Lucky','Isaac','Siphiwe','Christina','Bongiwe','Christopher','Thembinkosi','Nomusa','Matome','Sandile','Mary','Vusi','Charles','Susanna','Sifiso','Alfred','Phumzile','Thembi','Phindile','Gladys','Michelle','Tshepo','Simphiwe','Eunice','Elsie','Ntombifuthi','Bonginkosi','Sylvia','Duduzile','Zodwa','Thandiwe','Amanda','Mark','Andile','Mduduzi'];
  let emails: string[] = ['Johannes@tuks.co.za','Maria@tuks.co.za','Elizabeth@tuks.co.za',,'Themba@tuks.co.za','Patricia@tuks.co.za','Willem@tuks.co.za','Zanele''David@tuks.co.za','Anna@tuks.co.za','John@tuks.co.za','Michael@tuks.co.za','Sibongile@tuks.co.za','Johanna@tuks.co.za','Sipho@tuks.co.za','Joseph@tuks.co.za','Bongani@tuks.co.za','Lindiwe@tuks.co.za','Jan@tuks.co.za','Daniel@tuks.co.za','Martha@tuks.co.za','Busisiwe@tuks.co.za','Sibusiso@tuks.co.za','Thabo@tuks.co.za','Mpho@tuks.co.za','Petrus@tuks.co.za','Patrick@tuks.co.za','Peter@tuks.co.za','Simon@tuks.co.za','Jacobus@tuks.co.za','Samuel@tuks.co.za','William@tuks.co.za','Nonhlanhla@tuks.co.za','Hendrik@tuks.co.za','Pieter@tuks.co.za','Sarah@tuks.co.za','Thomas@tuks.co.za','Richard@tuks.co.za','Nkosinathi@tuks.co.za','Jabulani@tuks.co.za','Nokuthula@tuks.co.za','Tebogo@tuks.co.za','Thulani@tuks.co.za','Xolani@tuks.co.za','Johan@tuks.co.za','Linda@tuks.co.za','Andries@tuks.co.za','Zandile@tuks.co.za','Robert@tuks.co.za','George@tuks.co.za','Joyce@tuks.co.za','Mandla@tuks.co.za','Margaret@tuks.co.za','James@tuks.co.za','Moses@tuks.co.za','Siyabonga@tuks.co.za','Cynthia@tuks.co.za','Nompumelelo@tuks.co.za','Thandi@tuks.co.za','Andrew@tuks.co.za','Sello@tuks.co.za','Dumisani@tuks.co.za','Nomsa@tuks.co.za','Fikile@tuks.co.za','Jacob@tuks.co.za','Paul@tuks.co.za','Lucky@tuks.co.za','Isaac@tuks.co.za','Siphiwe@tuks.co.za','Christina@tuks.co.za','Bongiwe@tuks.co.za','Christopher@tuks.co.za','Thembinkosi@tuks.co.za','Nomusa@tuks.co.za','Matome@tuks.co.za','Sandile@tuks.co.za','Mary@tuks.co.za','Vusi@tuks.co.za','Charles@tuks.co.za','Susanna@tuks.co.za','Sifiso@tuks.co.za','Alfred@tuks.co.za','Phumzile@tuks.co.za','Thembi@tuks.co.za','Phindile@tuks.co.za','Gladys@tuks.co.za','Michelle@tuks.co.za','Tshepo@tuks.co.za','Simphiwe@tuks.co.za','Eunice@tuks.co.za','Elsie@tuks.co.za','Ntombifuthi@tuks.co.za','Bonginkosi@tuks.co.za','Sylvia@tuks.co.za','Duduzile@tuks.co.za','Zodwa@tuks.co.za','Thandiwe@tuks.co.za','Amanda@tuks.co.za','Mark@tuks.co.za','Andile@tuks.co.za','Mduduzi@tuks.co.za'];
  let password: string = '12345';
  let boolsuspended: boolean = false;
  let boolvalidated: boolean = true;

}
async function createMockData()
{
  for (let i = 0; i < 100; i++)
  {
  console.log ("Block statement execution no." + i);
    var date = new Date();
    const User = await prisma.user.create({
    data: {
    id: names[i],
    email: emails[i],
    created: date,
    suspended: false,
    validated: true
  }
  }
	,
})
}
// createMockData();
fakeData();
