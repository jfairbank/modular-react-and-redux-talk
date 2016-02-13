guard :shell do
  watch %r{.*code/samples/.*\.js$} do |m|
    `./copy-syntax.sh #{m[0]}`
  end
end
