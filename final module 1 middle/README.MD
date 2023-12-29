# git-config

git config --global user.name "[имя пользователя]"
git config --global user.email "[емайл пользователя]"
git config -l или -list вывести весь список настроек конфига

git config --global core.autocrlf true - меяет окончания команда для операционных систем windows
git config --global core.quotepath off - позволяет гиту печатать файл в виде 8-чных последовательностей, что бы избежать нечитаемых строк
git config --global core.safecrlf warn - выводит предупреждения, что другие окончания
git config --global init.defaultBranch main - указывает ветку по умолчанию

git init - инициализация репозитория
git add . добавить все файлы в track
git commit -m "текст сообщения" - сделать комит
git status - проверить статус репозитория

git diff - помотреть изменения
git diff --color-words - помотреть изменения c подсветкой цветом

git checkout [название файла] - отменить удаление файла
git checkout . возвращает все изменения и удалённые файлы к последнему комиту