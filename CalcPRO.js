let lastNumber = ''
$('.btn').click(function(){
    $('.act').val($('.act').val() + $(this).html())
    if(!$(this).hasClass('smth')){
        lastNumber += $(this).html()
    }else{
        lastNumber = ''
    }
})
$('#equal').click(function(){
    $('.act').val(eval($('.act').val()))
    lastNumber = ''
})
let total = ''
function deletePart(a, b){
    total = ''
    for(let i of a.split('')){
        if(!b.split('').includes(i)){
            total += i
        }
    }
    return total
}
$('#procent').click(function(){
    $('.act').val(deletePart($('.act').val(), lastNumber))
    $('.act').val($('.act').val() + String((+lastNumber)/100))
    lastNumber = String((+lastNumber)/100)
})
$('#ce').click(function(){
    $('.act').val('')
    lastNumber = ''
})
$('#c').click(function(){
    $('.act').val('')
    lastNumber = ''
})
function lastSymbol(a){
    return a.split('').at(-1)
}
const smth = ['+', '-', '*', '/']
$('#cancel').click(function(){
    if(!smth.includes(lastSymbol($('.act').val()))){
        lastNumber = deletePart(lastNumber, lastSymbol(lastNumber))
    }
    $('.act').val(deletePart($('.act').val(), lastSymbol($('.act').val())))
})
$('#reciprocal').click(function(){
    $('.act').val(deletePart($('.act').val(), lastNumber))
    $('.act').val($('.act').val() + String(1/(+lastNumber)))
    lastNumber = String(1/(+lastNumber))
})
$('#square').click(function(){
    $('.act').val(deletePart($('.act').val(), lastNumber))
    $('.act').val($('.act').val() + String((+lastNumber)**2))
    lastNumber = String((+lastNumber)**2)
})
$('#root').click(function(){
    $('.act').val(deletePart($('.act').val(), lastNumber))
    $('.act').val($('.act').val() + String(Math.sqrt((+lastNumber))))
    lastNumber = String(Math.sqrt((+lastNumber)))
})
$('#sign').click(function(){
    if(-1 * lastNumber > 0){
        $('.act').val(deletePart($('.act').val(), lastNumber))
        $('.act').val($('.act').val() + String((+lastNumber)*(-1)))
        $('.act').val(deletePart($('.act').val(), '('))
        $('.act').val(deletePart($('.act').val(), ')'))
    }else{
        $('.act').val(deletePart($('.act').val(), '('))
        $('.act').val(deletePart($('.act').val(), lastNumber))
        $('.act').val(deletePart($('.act').val(), ')'))
        $('.act').val($('.act').val() + '(' + String((+lastNumber)*(-1)) + ')')
    }
    lastNumber = String((+lastNumber)*(-1))
})