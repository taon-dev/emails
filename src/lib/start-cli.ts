/**
 *
 * @param argsv process.argsv
 * @param filename needed if you want ipc communicaiton
 */
export async function startCli(
  argsv: string[],
  filename: string,
): Promise<void> {
  //#region @backendFunc
  console.log('Hello from cli');
  console.log({ argsv });
  process.exit(0); // comment this to use BaseStartConfig and class based cli

  //#endregion
}

export default startCli;
