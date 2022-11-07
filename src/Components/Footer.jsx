import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { IconGitHub } from './IconGitHub';
import { IconLinkedin } from './IconLinkedin';

export function Footer() {
  return (
    <footer
        id="footer"
        className="footer footer-center gap-2 py-4 xs2:p-4 bg-base-200 text-base-content rounded" 
        >
        <div className="grid grid-flow-col gap-2 text-[10px] sm:text-[12px]">
            <a
            className="link link-hover hover:text-[#61dbfb]" target="_blank"
            href="https://github.com/AlanStall"
            >
            Desenvolvedor
            </a>
            <a
            className="link link-hover hover:text-[#61dbfb]" target="_blank"
            href="https://www.linkedin.com/in/alan-stall-b722a962/"
            >
            Contato
            </a>
            <a className="link link-hover hover:text-[#61dbfb]" target="_blank" href="https://github.com/AlanStall/practice-english">
            Código Fonte
            </a>            
            <a className="link link-hover hover:text-[#61dbfb]" target="_blank" href="/Alan_Stall-Curriculo-2022.pdf">
            Currículo
            </a>
        </div>

        <div className="grid grid-flow-col gap-2">
            <a
            href="https://github.com/AlanStall"
            target="_blank"
            title="GitHub"
            className="btn-outline rounded-md fill-[#ffffff] hover:fill-[#000000] hover:bg-gray-100 h-12 w-12 flex justify-center items-center"
            >
            <IconGitHub />
            </a>
            <a
            href="https://www.linkedin.com/in/alan-stall-b722a962/"
            target="_blank"
            title="LinkedIn"
            className="btn-outline rounded-md fill-[#ffffff] hover:fill-[#0A66C2] hover:bg-gray-100 h-12 w-12 flex justify-center items-center"
            >
            <IconLinkedin />
            </a>
        </div>

        <div>
            <div className="grid grid-flow-col gap-1">
                <p className="text-[12px] sm:text-[14px] flex self-center">alan_kstall@hotmail.com</p>
                <CopyToClipboard text="alan_kstall@hotmail.com">
                    <button className="btn btn-outline btn-xs text-[9px] sm:text-[10px] pt-1 content-center">Copiar e-mail</button>
                </CopyToClipboard>
            </div>
            <p className="text-[10px] sm:text-[12px]">Copyright © 2022 - Desenvolvido por Alan Stall</p>
        </div>
    </footer>
  );
}


