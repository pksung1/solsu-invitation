import styled from "@emotion/styled";
import { useRef } from "react";


const CopyButton = styled.button<{primary?: boolean}>`
  font-family: var(--font-SpoqaHanSans);
  font-size: 16px;
  font-weight: 700;
  color: ${({primary}) => primary ? 'var(--color-primary-1)' : 'var(--color-secondary)'};
`
const Name = styled.p<{primary?: boolean}>`
  padding-left: 20px;
  font-family: var(--font-SpoqaHanSans);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`

const AccountBox = ({name, bank, primary}: {name: string, bank: string, primary?: boolean}) => {
  const bankRef = useRef<HTMLDivElement>(null)
  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(bank).then(() => {
      window.alert(`${bank} 복사했습니다.`)
    });
  }
  return (
    <div className="mb(20px)">
      <Name>{name}</Name>
      <div className="p(8px/20px) hbox space-between bg(--color-white) border-radius(20px)">
        <p className="font-family(--font-SpoqaHanSans) font(16px)" ref={bankRef}>{bank}</p>
        <CopyButton primary={primary} onClick={handleCopyClipboard}>복사하기</CopyButton>
      </div>
    </div>
  )
}

export default AccountBox;