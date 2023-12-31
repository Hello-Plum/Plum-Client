import { useRecoilState, useSetRecoilState } from "recoil"
import { checkMemberAvailableBtnActivatedState, hostSelectedAvailableWeekState, memberSelectedTimeBlockList } from "../../states/atom"

export const useCheckAvailableTimeTable = () => {
  const setIsActivated = useSetRecoilState(checkMemberAvailableBtnActivatedState)
  // 호스트가 선택한 요일의 인덱스 리스트
  const [selectedWeek, setSelectedWeek] = useRecoilState(hostSelectedAvailableWeekState)
  // 멤버가 선택한 시간 블록 저장 리스트
  const setSelectedTimeBlock = useSetRecoilState(memberSelectedTimeBlockList)
  
  const disabledDayTable = (slotIndex: number, selectedWeek: number[]) => {
    if (slotIndex % 7 === selectedWeek[0]) return ''
    return ' disabled'
  }

  const disabledWeekTable = (slotIndex: number, selectedWeek: number[]) => {
    if (selectedWeek.includes(slotIndex % 7)) return ''
    return ' disabled'
  }

  const handleTimeTableSelect = (e: any) => { 
    const blocks = e.selected.map((block: any) => Number(block.id))
    setSelectedTimeBlock(blocks)
    setIsActivated(true)

    e.added.forEach((el: any) => {
      if (selectedWeek.includes(Number(el.id) % 7)) {
        el.classList.add('selected')
      }
    })
    e.removed.forEach((el: any) => {
      el.classList.remove('selected')
    })
  }

  return { selectedWeek, setSelectedWeek, handleTimeTableSelect, disabledDayTable, disabledWeekTable }
}