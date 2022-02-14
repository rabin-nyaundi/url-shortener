import { toast } from "react-toastify";

export const saveToLocalStorage = (state: []) => {
  try {
    const stateArray: [] = [];
    const serializedData = JSON.stringify(state);
    //   @ts-ignore
    stateArray.push(serializedData);
    localStorage.setItem("state", serializedData);
  } catch (e) {
    console.log(e);
  }
};

export function copyToClipboard(text: string) {
  try {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard");
    console.log("copied to clipboard", text);
  } catch (error) {
    console.log(error);
  }
}
