var mime=require("./mime.js"),file=process.argv[2],type=mime.lookup(file);process.stdout.write(type+"\n");