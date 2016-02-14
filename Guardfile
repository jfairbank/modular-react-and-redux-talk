guard :shell do
  watch %r{.*code/samples/.*\.js$} do |m|
    `./copy-syntax.sh #{m[0]}`
  end
end

guard 'livereload' do
  watch 'code/demo/public/index.html'
  watch %r{code/demo/public/assets/.*\.css}
end
