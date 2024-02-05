# CLI File Manager (Node.js)
## Short description
This file manager is to:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Technical requirements
• No external dependencies should be required  
• Use 20 LTS version of Node.js  
• The program is started by npm-script start in following way:
> `npm run start -- --username=your_username`

After starting the application, it should display the following text in the console (`Username` is equal to the value that is passed on application start in `--username=<your_username>` CLI argument):

> Welcome to the File Manager, <your_username>!

Upon application close (whenever `ctrl + c` is pressed or user sends `.exit` command into console) the application displays the following text:
> Thank you for using File Manager, <your_username>, goodbye!

At the application start and after end of each input/operation, current working directory should be printed as follows:
> You are currently in <path_to_working_directory>

Starting working directory is current user's home directory (for example, on Windows it should be like
`system_drive/Users/Username`)

By default, the application should prompt user to print commands and wait for results.

In case of unknown operation or invalid input (missing mandatory arguments, wrong data in arguments, etc.), message:
> Invalid input

should appear and user will be able to enter another command

In case of error during execution of operation, message:
> Operation failed

should appear and user will be able to enter another command (e.g. attempt to perform an operation on a non-existent file or work on a non-existent path should result in the operation fail)

User can not go further up than a `root` directory (e.g. on Windows its current local drive root). If user tries to do so, current working directory doesn't change

### List of operations and syntax:

- Navigation & working directory (nwd):
  - Go further `up` from the current directory (when you are in the root folder this operation shouldn't change working directory)
  > $ up

  - Go to dedicated folder from current directory (`<path_to_directory>` can be relative or absolute):
  > $ cd <path_to_directory>

  - Print to console a list of all files and folders in the current directory. List should contain:
    - list must contain files and folder names (for files - with extension)
    - folders and files are sorted in alphabetical order ascending, but list of folders goes first type of directory
    - content must be marked explicitly (e.g. as a corresponding column value)
  > $ ls

- Basic operations with files
  - Read file and print its content to console (done via Readable stream):
  > $ cat <path_to_file>

  - Create empty file in current working directory:
  > $ add <new_file_name>

  - Rename file (content should remain unchanged):
  > $ rn <path_to_file> <new_filename>

  - Copy file (done via Readable and Writable streams):
  > $ cp path_to_file path_to_new_directory

  - Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
  > $ mv <path_to_file> <path_to_new_directory>

  - Delete file:
  > $ rm <path_to_file>

- Operating system info (prints the following information to console)
  - Get EOL (default system End-Of-Line) and print it to console
  > $ os --EOL

  - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each) and prints it to console:
  > $ os --cpus

  - Get home directory and prints it to console:
  > $ os --homedir

  - Get **current system
    ** username (Do not confuse with the username set when the application started) and prints it to console
  > $ os --username

  - Get CPU architecture for which Node.js binary has compiled and print it to console
  > $ os --architecture

- Hash calculation
  - Calculates file's `hash` and prints it to console
  > $ hash <path_to_file>

- Compress and decompress operations
  - Compress file (using `Brotli` algorithm, done via Streams API)
  > $ compress <path_to_file> <path_to_destination>

  - Decompress file (using `Brotli` algorithm, done via Streams API)
  > $ decompress <path_to_file> <path_to_destination>

  NOTE: *After decompressing of previously compressed file, the result must not differ with originally compressed file*
