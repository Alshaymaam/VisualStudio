import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClickedFile, Ifile, IinitialState } from "../../interfaces";

const initialState:IinitialState={ openedFile:[],clickedFile:{ filename:"", fileContent:"",activeTapId:null}}
const FileTreeSlice=createSlice({ name:'Filetree',initialState,
    reducers:{
        setOpenedFile:(state,action:PayloadAction<Ifile[]>)=>{state.openedFile=action.payload; },
        setCilckedFile:(state,action:PayloadAction<IClickedFile>)=>{ state.clickedFile=action.payload;},
 },});
export const {setOpenedFile,setCilckedFile}=FileTreeSlice.actions;
export default FileTreeSlice.reducer;